// @ts-nocheck
import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 61002,
  name: "LittleGKD 全网合订本",
  version: 1794001433,
  author: "Little Code Sauce · 合并 AIsouler/Adpro/aoguai/Lin-arm/ganlin/MengNianxiaoyao/官方",
  updateUrl: "",
  supportUri: "https://gkd.li/",
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
