import mongoose, { Document } from 'mongoose';

interface SubscriberTopicAttributes {
  subscriber: string;
  topic: string;
}

const SubscriberTopicSchema = new mongoose.Schema(
  {
    subscriber: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subscriber',
      required: true
    },
    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Topic',
      required: true
    }
  },
  { timestamps: true }
);

const SubscriberTopic = mongoose.model<SubscriberTopicAttributes & Document>(
  'SubscriberTopic',
  SubscriberTopicSchema
);

export { SubscriberTopic };
