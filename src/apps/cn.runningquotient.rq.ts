// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "RQrun",
  "id": "cn.runningquotient.rq",
  "groups": [
    {
      "name": "功能类-自动签到",
      "desc": "点击右侧[签到福利]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_main_checkin_entry\"]",
          "activityIds": "cn.runningquotient.rq.page.common_page.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16105502"
        },
        {
          "matches": "@[visibleToUser=true][text=\"我知道了\"] <<n [vid=\"common_h5_container\"]",
          "preKeys": [
            3
          ],
          "activityIds": "cn.runningquotient.rq.page.common_page.CommonContainerActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16105938"
        },
        {
          "matches": "[vid=\"iv_setting_header_view_left\"]",
          "preKeys": [
            4
          ],
          "activityIds": "cn.runningquotient.rq.page.common_page.CommonContainerActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16105942"
        },
        {
          "matches": "[vid=\"iv_main_checkin_entry\"]",
          "activityIds": ".page.common_page.MainActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/16105502"
        },
        {
          "matches": "@Button[text=\"我知道了\"][clickable=true] <2 View < [index=parent.childCount.minus(1)] <n WebView <<2 [vid=\"common_h5_container\"]",
          "preKeys": [
            3
          ],
          "activityIds": ".page.common_page.CommonContainerActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/16105938"
        },
        {
          "matches": "[vid=\"iv_setting_header_view_left\"]",
          "preKeys": [
            4
          ],
          "activityIds": ".page.common_page.CommonContainerActivity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/16105942"
        }
      ]
    }
  ]
});
