// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "半导小芯",
  "id": "com.binniu",
  "groups": [
    {
      "name": "功能类-自动点击更多封装",
      "desc": "规格书-分析-查看更多",
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"ll_more\"] > [vid=\"tv_more\"][text!^=\"收起\"] + [vid=\"iv_more\"][visibleToUser=true]",
          "activityIds": ".ui.activity.classify.ChipChoiceCompareActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26836800",
          "exampleUrls": "https://e.gkd.li/bf5ab2de-d817-4f93-9dfd-26b76862a961",
          "key": 0
        }
      ]
    }
  ]
});
