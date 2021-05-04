import { TOPIC_CONSTANTS } from '../config/constant';
import express from 'express';
import response from '../utils/response';
const router = express.Router();
import { Topic, validateTopicPost } from '../models/topic';

// Get Single Topic
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const topic = await Topic.findById(id);
    return response.withDataAndMsg(res, TOPIC_CONSTANTS.TOPIC_NOT_FOUND, topic);
  } catch (error) {
    return response.error(res, error.message);
  }
});

// Get topic List
router.get('/', async (req, res) => {
  try {
    const topicList = await Topic.find({});
    return response.withDataAndMsg(res, undefined, topicList);
  } catch (error) {
    return response.error(res, error.message);
  }
});

// Add topic
router.post('/', async (req, res) => {
  const error = await validateTopicPost(req.body);
  if (error) return response.error(res, error.message);

  // retrieve topic url and topic
  const { topic } = req.body;

  try {
    // check if topic exists
    const topicExists = await Topic.exists({ topic });
    if (topicExists) return response.error(res, TOPIC_CONSTANTS.TOPIC_EXISTS);

    // persist topic
    const topicModel = new Topic({ topic });
    await topicModel.save();

    return response.success(res, TOPIC_CONSTANTS.TOPIC_ADDED);
  } catch (error) {
    return response.error(res, error.message);
  }
});

export default router;
