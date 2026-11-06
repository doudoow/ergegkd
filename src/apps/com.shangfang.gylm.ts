// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "高佣联盟",
  "id": "com.shangfang.gylm",
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
          "matches": "[id=\"com.shangfang.gylm:id/iv_upgrade_close\"]",
          "activityIds": ".mvp.ui.home.activity.UpdateActivityV2",
          "snapshotUrls": "https://i.gkd.li/i/13643599",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_upgrade_close\"]",
          "activityIds": ".mvp.ui.home.activity.UpdateActivityV2",
          "snapshotUrls": "https://i.gkd.li/i/13643599",
          "key": 1
        },
        {
          "matches": "[id=\"com.shangfang.gylm:id/iv_upgrade_close\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.shangfang.gylm:id/iv_upgrade_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.shangfang.gylm:id/iv_upgrade_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
