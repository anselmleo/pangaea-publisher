import mongoose, { Document } from 'mongoose';
import Joi from 'joi';

// interface SubscriberAttributes
interface SubscriberAttributes {
  subscriberUrl: string;
}

const SubscriberSchema = new mongoose.Schema(
  {
    subscriberUrl: { type: String, required: true }
  },
  { timestamps: true }
);

const Subscriber = mongoose.model<SubscriberAttributes & Document>(
  'Subscriber',
  SubscriberSchema
);

const SubscriberAuditSchema = new mongoose.Schema(
  {
    subscriberUrl: { type: String }
  },
  { timestamps: true }
);

const SubscriberAudit = mongoose.model(
  'SubscriberAudit',
  SubscriberAuditSchema
);

const validateSubscriberPost = async (subscriber: SubscriberAttributes) => {
  const schema = Joi.object({
    url: Joi.string().required()
  });

  try {
    const value = await schema.validateAsync(subscriber);
  } catch (error) {
    // throw new Error('Failed to validate input ' + error.details[0].message);
    return error;
  }
};

// audit purposes
async function logCurrentSubscriberState(subscriber: any) {
  let auditSubscriber = new SubscriberAudit({
    subscriberId: subscriber._id.toString(),
    subscriberUrl: subscriber.subscriberUrl
  });

  await auditSubscriber.save();
}

export { SubscriberAudit, Subscriber, validateSubscriberPost };
