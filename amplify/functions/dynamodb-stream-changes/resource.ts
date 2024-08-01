import { defineFunction } from "@aws-amplify/backend";

export const streamChapterChanges = defineFunction({
  name: "stream-chapter-changes",
  memoryMB: 128,
});
