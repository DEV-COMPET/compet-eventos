// models.js

import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: String,
  slug:String,
  description:String,
},{collection:'projects'});

const Project = mongoose.models.Projects|| mongoose.model('Projects', projectSchema);

export default Project;
