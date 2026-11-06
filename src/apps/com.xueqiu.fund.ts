// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "雪球基金",
  "id": "com.xueqiu.fund",
  "groups": [
    {
      "name": "全屏广告-基金页面弹窗广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.xueqiu.fund:id/image_cancel\"]",
          "activityIds": "com.xueqiu.fund.commonlib.FundHomeActivityV2",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14163901",
          "exampleUrls": "https://m.gkd.li/57941037/c43d58ab-a18c-4249-bc35-1c7aeab4c3ff",
          "key": 0
        },
        {
          "matches": "[vid=\"image_cancel\"]",
          "activityIds": ".commonlib.FundHomeActivityV2",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14163901",
          "exampleUrls": "https://m.gkd.li/57941037/c43d58ab-a18c-4249-bc35-1c7aeab4c3ff",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-春节闲钱放哪里弹窗",
      "desc": "有误触风险",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"image_cancel\"]",
          "key": 0
        }
      ]
    }
  ]
});
