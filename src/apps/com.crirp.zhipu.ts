// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "智谱",
  "id": "com.crirp.zhipu",
  "groups": [
    {
      "name": "开屏广告",
      "enable": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13725305",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-今日要闻弹窗",
      "desc": "点击不再提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"今日不再提示\"]",
          "activityIds": "com.ruipeng.zipu.ui.main.uniauto.UniautoHomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13725337",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页-今日要闻-不再提示",
      "desc": "【首页-今日要闻-不再提示】和【首页-今日要闻-关闭】只开启一个即可",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id$=\"/cancel_tv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13725337",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页-今日要闻-关闭",
      "desc": "【首页-今日要闻-不再提示】和【首页-今日要闻-关闭】只开启一个即可",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id$=\"/tv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13725337",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页-今日要闻-不再提示",
      "desc": "【首页-今日要闻-不再提示】和【首页-今日要闻-关闭】只开启一个即可",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id$=\"/cancel_tv\"]",
          "snapshotUrls": "https://i.gkd.li/import/13725337",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页-今日要闻-关闭",
      "desc": "【首页-今日要闻-不再提示】和【首页-今日要闻-关闭】只开启一个即可",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id$=\"/tv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13725337",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-今日要闻-不再提示",
      "desc": "【首页-今日要闻-不再提示】和【首页-今日要闻-关闭】只开启一个即可",
      "enable": false,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id$=\"/cancel_tv\"]",
          "snapshotUrls": "https://i.gkd.li/import/13725337",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-今日要闻-关闭",
      "desc": "【首页-今日要闻-不再提示】和【首页-今日要闻-关闭】只开启一个即可",
      "enable": false,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id$=\"/tv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13725337",
          "key": 0
        }
      ]
    }
  ]
});
