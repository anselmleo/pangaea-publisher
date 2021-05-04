import mongoose, { Document } from 'mongoose';
import Joi from 'joi';

// interface TopicAttributes
interface TopicAttributes {
  topic: string;
}

const TopicSchema = new mongoose.Schema(
  {
    topic: { type: String, required: true }
  },
  { timestamps: true }
);

const Topic = mongoose.model<TopicAttributes & Document>('Topic', TopicSchema);

const TopicAuditSchema = new mongoose.Schema(
  {
    topic: { type: String }
  },
  { timestamps: true }
);

const TopicAudit = mongoose.model('TopicAudit', TopicAuditSchema);

const validateTopicPost = async (topic: TopicAttributes) => {
  const schema = Joi.object({
    topic: Joi.string().required()
  });
  console.log('igottoasync oooo');
  try {
    const value = await schema.validateAsync(topic);
  } catch (error) {
    return error;
  }
};

// audit purposes
async function logCurrentTopicState(topic: any) {
  let auditTopic = new TopicAudit({
    topicId: topic._id.toString(),
    topic: topic.topic
  });

  await auditTopic.save();
}

export { TopicAudit, Topic, validateTopicPost };
