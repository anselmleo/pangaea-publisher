import { SUBSCRIBER_CONSTANTS } from '../config/constant';
import mongoose from 'mongoose';
import config from 'config';
import express from 'express';
import response from '../utils/response';
const router = express.Router();
import {
  Subscriber,
  SubscriberAudit,
  validateSubscriberPost
} from '../models/subscriber';

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

// Add subscriber
router.post('/', async (req, res) => {
  const error = validateSubscriberPost(req.body);
  if (error) return response.error(res);
});

async function logCurrentRoleState(subscriber: any) {
  let auditSubscriber = new SubscriberAudit({
    subscriberId: subscriber._id.toString(),
    subscriberUrl: subscriber.subscriberUrl
  });

  await auditSubscriber.save();
}

export default router;
