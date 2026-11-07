// @ts-nocheck
import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 61002,
  name: "鸡哥的订阅",
  version: 1794001438,
  author: "鸡哥",
  updateUrl: "",
  supportUri: "https://gkd.li/",
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
