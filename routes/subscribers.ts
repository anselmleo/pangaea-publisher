import { SUBSCRIBER_CONSTANTS, TOPIC_CONSTANTS } from '../config/constant';
import express from 'express';
import response from '../utils/response';
const router = express.Router();
import { Subscriber, validateSubscriberPost } from '../models/subscriber';
import { Topic } from '../models/topic';
import { SubscriberTopic } from '../models/subscriberTopic';

// Get Single Subscriber
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const subscriber = await Subscriber.findById(id);
    return response.withDataAndMsg(
      res,
      SUBSCRIBER_CONSTANTS.SUBSCRIBER_NOT_FOUND,
      subscriber
    );
  } catch (error) {
    return response.error(res, error.message);
  }
});

// Get Subscribers List
router.get('/', async (req, res) => {
  try {
    const subscriberList = await Subscriber.find({});
    return response.withDataAndMsg(res, undefined, subscriberList);
  } catch (error) {
    return response.error(res, error.message);
  }
});

// Create a subscription
router.post('/:topic', async (req, res) => {
  const error = await validateSubscriberPost(req.body);
  if (error) return response.error(res, error.message);

  // retrieve subscriber url and topic
  const { url } = req.body;
  const { topic } = req.params;

  try {
    // check if topic exist
    const topicExists = await Topic.exists({ topic: topic });
    if (!topicExists)
      return response.error(res, TOPIC_CONSTANTS.TOPIC_NOT_FOUND);

    // fetch topic model
    const topicModel: any = await Topic.findOne({ topic });

    // check if subscriber already exists for the topic
    const subscriberExists = await Subscriber.exists({ subscriberUrl: url });
    if (subscriberExists) {
      const subscriberModel: any = await Subscriber.findOne({
        subscriberUrl: url
      });
      const subscriberTopicExists = await SubscriberTopic.exists({
        $and: [{ subscriber: subscriberModel._id }, { topic: topicModel._id }]
      });

      if (subscriberTopicExists)
        return response.error(res, SUBSCRIBER_CONSTANTS.SUBSCRIBER_EXISTS);

      // populate relationship collection
      const subcriberTopic = new SubscriberTopic({
        subscriber: subscriberModel._id,
        topic: topicModel._id
      });
      subcriberTopic.save();

      return response.withData(res, { url: url, topic: topic });
    }

    // persist new subscriber url
    const subscriber = new Subscriber({ subscriberUrl: url });
    await subscriber.save();

    // populate relationship collection
    const subcriberTopic = new SubscriberTopic({
      subscriber: subscriber._id,
      topic: topicModel._id
    });
    subcriberTopic.save();

    return response.withData(res, { url: url, topic: topic });
  } catch (error) {
    return response.error(res, error.message);
  }
});

export default router;
