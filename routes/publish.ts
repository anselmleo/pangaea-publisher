import { PUBLISH_CONSTANTS, TOPIC_CONSTANTS } from '../config/constant';
import express from 'express';
import response from '../utils/response';
import axios from 'axios';
import { Topic } from '../models/topic';
import { SubscriberTopic } from '../models/subscriberTopic';
import { Subscriber } from '../models/subscriber';
const router = express.Router();

// Publish
router.post('/:topic', async (req, res) => {
  const { topic } = req.params;

  try {
    // check that topic exists
    const topicExists = await Topic.exists({ topic });

    if (!topicExists)
      return response.error(res, TOPIC_CONSTANTS.TOPIC_NOT_FOUND);

    // find all subscribers of topic
    const topicModel: any = await Topic.findOne({ topic });

    const subscriberExists = await SubscriberTopic.exists({
      topic: topicModel._id
    });
    if (!subscriberExists)
      return response.error(res, PUBLISH_CONSTANTS.SUBSCRIBER_NOT_FOUND);

    const subscribers = await SubscriberTopic.find({ topic: topicModel._id });
    const subscriberUrls = new Array();

    for (const subscriber of subscribers) {
      let subscriberModel = await Subscriber.findById(subscriber.subscriber);
      subscriberUrls.push(subscriberModel!.subscriberUrl);
    }

    // publish to all subscriber urls using axios.post and axios.all
    const publishToSubs = new Array();

    for (let i: number = 0; i < subscriberUrls.length; i++) {
      publishToSubs[i] = await axios.post(subscriberUrls[i], req.body);
    }

    const responses = await axios.all(publishToSubs);
    return response.withData(res, responses);
  } catch (error) {
    return response.error(res, error.message);
  }
});

export default router;
