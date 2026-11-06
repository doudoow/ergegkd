// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "SpeedTest",
  "id": "org.zwanoo.android.speedtest",
  "groups": [
    {
      "name": "局部广告-测速后广告",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"org.zwanoo.android.speedtest:id/suite_completed_close_ad_button\"]",
          "activityIds": "com.ookla.mobile4.screens.main.MainViewActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12893175"
        },
        {
          "matches": "[vid=\"suite_completed_close_ad_button\"]",
          "activityIds": "com.ookla.mobile4.screens.main.MainViewActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12893175"
        }
      ]
    },
    {
      "name": "未分类-测速后广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"org.zwanoo.android.speedtest:id/suite_completed_close_ad_button\"]",
          "activityIds": "com.ookla.mobile4.screens.main.MainViewActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12893175"
        }
      ]
    },
    {
      "name": "全屏广告-测速后广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"org.zwanoo.android.speedtest:id/suite_completed_close_ad_button\"]",
          "activityIds": "com.ookla.mobile4.screens.main.MainViewActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12893175"
        }
      ]
    },
    {
      "name": "测速后广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"org.zwanoo.android.speedtest:id/suite_completed_close_ad_button\"]",
          "activityIds": "com.ookla.mobile4.screens.main.MainViewActivity",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12893175"
        }
      ]
    }
  ]
});
