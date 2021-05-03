import config from 'config';
import mongoose from 'mongoose';
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

const Subscriber = mongoose.model('Subscriber', SubscriberSchema);

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

exports.validateSubscriberPost = async (subscriber: SubscriberAttributes) => {
  const schema = Joi.object({
    subscriberUrl: Joi.string().required()
  });

  try {
    const value = await schema.validateAsync(subscriber);
  } catch (error) {
    throw new Error('Failed to validate input ' + error.details[0].message);
  }
};

exports.Subscriber = Subscriber;
exports.SubscriberAudit = SubscriberAudit;
// export { SubscriberAudit, Subscriber };
