// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "作业帮家长版",
  "id": "com.zuoyebang.knowledge",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.zuoyebang.knowledge:id/cancel_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13695522",
          "key": 0
        },
        {
          "matches": "[vid=\"cancel_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13695522",
          "key": 1
        }
      ]
    },
    {
      "name": "评价提示-赏好评弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "TextView[id=\"com.zuoyebang.knowledge:id/btn_cancle\"]",
          "activityIds": "com.baidu.homework.activity.init.InitActivity",
          "snapshotUrls": "https://i.gkd.li/i/13043228",
          "key": 0
        },
        {
          "matches": "TextView[vid=\"btn_cancle\"]",
          "activityIds": "com.baidu.homework.activity.init.InitActivity",
          "snapshotUrls": "https://i.gkd.li/i/13043228",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-更新提醒",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.zuoyebang.knowledge:id/cancel_button\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-赏好评弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "TextView[id=\"com.zuoyebang.knowledge:id/btn_cancle\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-赏好评弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "TextView[id=\"com.zuoyebang.knowledge:id/btn_cancle\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提醒",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.zuoyebang.knowledge:id/cancel_button\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "赏好评弹窗",
      "enable": false,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "TextView[id=\"com.zuoyebang.knowledge:id/btn_cancle\"]",
          "key": 0
        }
      ]
    }
  ]
});
