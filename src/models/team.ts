import { Team } from '@/interfaces/team';
import { ObjectID } from 'bson';
import mongo from 'mongoose';

const schema = new mongo.Schema<Team>({
  name: { required: true, type: String },
  users: [{ type: ObjectID, ref: 'User' }],
});

const TeamModel = mongo.model<Team>('Team', schema);
export default TeamModel;
