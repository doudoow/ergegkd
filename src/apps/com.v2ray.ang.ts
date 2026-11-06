// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "v2rayNG",
  "id": "com.v2ray.ang",
  "groups": [
    {
      "name": "功能类-开屏连代理",
      "desc": "打开app自动连接代理",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "key": 0,
      "rules": [
        {
          "matches": "@FloatingActionButton[clickable=true] < FrameLayout - LinearLayout >2 [vid=\"tv_test_state\"][visibleToUser=true]",
          "excludeMatches": "[vid=\"tv_test_state\"][text^=\"已连接\" || text^=\"连接成功\"]",
          "activityIds": ".ui.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26027207",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/26027331",
            "https://i.gkd.li/i/26027339"
          ],
          "exampleUrls": "https://e.gkd.li/d2972c79-d1f7-445c-b9dd-83612c820456",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动测试连接",
      "desc": "启动成功测试代理连接情况",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"tv_test_state\"][text$=\"点击测试连接\"]",
          "activityIds": ".ui.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26151342",
          "exampleUrls": "https://e.gkd.li/d00b6cb2-b09c-4be8-8be6-e51df6903055",
          "key": 0
        }
      ]
    }
  ]
});
