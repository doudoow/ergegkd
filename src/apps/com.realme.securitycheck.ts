// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "SecurityAnalysis",
  "id": "com.realme.securitycheck",
  "groups": [
    {
      "name": "局部广告-安全监测通过后的广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ad_contain\"] >5 [vid=\"close\"][clickable=true]",
          "activityIds": "com.realme.securitycheck.SecurityCheckActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14476628",
          "exampleUrls": "https://m.gkd.li/57941037/c4a9acc9-3108-4364-8586-906b200e1171",
          "key": 0
        },
        {
          "matches": "[vid=\"ad_contain\"] >5 [vid=\"close\"][clickable=true]",
          "activityIds": ".SecurityCheckActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14476628",
          "exampleUrls": "https://m.gkd.li/57941037/c4a9acc9-3108-4364-8586-906b200e1171",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-关闭安装应用后的安全检测",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"finish\"][visibleToUser=true]",
          "activityIds": ".SecurityCheckActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20592226",
          "exampleUrls": "https://e.gkd.li/f8a626f2-36dd-4e3a-9ceb-70877c27330c",
          "key": 0
        }
      ]
    }
  ]
});
