// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "百变大侦探",
  "id": "com.mszmapp.detective",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"rvActivityPopups\"] + [vid=\"iv_close\"]",
          "activityIds": ".module.home.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/31164272",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-签到弹窗",
      "desc": "按[返回键]",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"vpFragments\"] >3 [vid=\"ivAdCover\"][visibleToUser=true]",
          "action": "back",
          "activityIds": ".module.home.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/31215860",
          "exampleUrls": "https://e.gkd.li/e07ecaa8-d175-418d-963a-c4796bb7ab81",
          "key": 0
        }
      ]
    }
  ]
});
