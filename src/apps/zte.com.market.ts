// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "应用中心",
  "id": "zte.com.market",
  "groups": [
    {
      "name": "功能类-流量模式点击[继续下载]",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"继续下载\"][visibleToUser=true]",
          "activityIds": "cn.nubia.neostore.WifiLimitActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16478331",
          "exampleUrls": "https://e.gkd.li/6bab3e98-7b52-49eb-b8e8-ae47b871343d",
          "key": 0
        }
      ]
    }
  ]
});
