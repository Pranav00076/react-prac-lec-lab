import { Prompt } from '@promptforgee/core';

const Pprompt = Prompt.create()
  .role('Data Scientist')
  .task('Analyze the provided CSV data and extract the top 3 trends.')
  .constraint('Only output valid JSON.')
  .constraint('Do not include explanatory markdown text.')
  .output('JSON array')
  .build();

console.log(prompt);

export default Pprompt