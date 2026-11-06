// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "腾讯会议",
  "id": "com.tencent.wemeet.app",
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
          "matches": "[text^=\"腾讯会议新版本\"] +3 * > [text=\"下次安装\"]",
          "activityIds": ".StartupActivity",
          "snapshotUrls": "https://i.gkd.li/i/14332625",
          "key": 0
        },
        {
          "matches": "@[text=\"稍后更新\"][clickable=true] + [text=\"立即更新\"]",
          "activityIds": "com.tencent.wemeet.sdk.meeting.premeeting.home.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26088565",
          "key": 1
        }
      ]
    },
    {
      "name": "评价提示-通话质量评价",
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text=\"通话品质如何\"]",
            "[vid=\"closeBtn\"][clickable=true]"
          ],
          "activityIds": "com.tencent.wemeet.sdk.meeting.aftermeeting.AfterMeetingFeedbackMeetingExperienceActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23786665",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "key": 2,
      "rules": [
        {
          "matches": "@Button[clickable=true][childCount=1] > ImageView[childCount=0][width<80 && height<80] <<n [vid=\"operatingBannerContainer\"]",
          "activityIds": "com.tencent.wemeet.sdk.meeting.premeeting.home.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23786670",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告",
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"btnClose\"]",
          "activityIds": "com.tencent.wemeet.sdk.meeting.aftermeeting.AfterMeetingPictureActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23787037",
          "key": 0
        }
      ]
    }
  ]
});
