// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "电话",
  "id": "com.android.incallui",
  "groups": [
    {
      "name": "功能类-接通话时自动点击录音",
      "actionMaximum": 1,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[vid=\"elapsedTime\"][visibleToUser=true]",
            "[vid=\"recordButton\"][desc=\"录音\"][visibleToUser=true]"
          ],
          "actionDelay": 500,
          "activityIds": ".InCallActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20876897",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/20876893",
            "https://i.gkd.li/i/20877514"
          ],
          "exampleUrls": "https://e.gkd.li/cfe191ef-3786-403c-ba88-e18d299803a8",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-接通话时自动[录音]",
      "actionMaximum": 1,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[vid=\"elapsedTime\"][visibleToUser=true]",
            "[vid=\"recordButton\"][desc=\"录音\"]"
          ],
          "actionDelay": 500,
          "activityIds": ".InCallActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20876897",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/20876893",
            "https://i.gkd.li/i/20877514"
          ],
          "exampleUrls": "https://e.gkd.li/cfe191ef-3786-403c-ba88-e18d299803a8",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-通话时自动开[免提]",
      "desc": "适合老人用",
      "actionCd": 3000,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"audioButton\"][clickable=true][checked=false]",
          "activityIds": ".InCallActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25824399",
          "excludeSnapshotUrls": "https://i.gkd.li/i/25824401"
        },
        {
          "matches": "[vid=\"audioButton\"][checked=false] >2 [vid=\"ovalButton\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/27233140",
          "excludeSnapshotUrls": "https://i.gkd.li/i/27233263"
        },
        {
          "matches": "[vid=\"showAudioButton\"][clickable=true]",
          "action": "clickCenter",
          "actionMaximum": 1,
          "activityIds": ".InCallActivity",
          "resetMatch": "app",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/20877514",
            "https://i.gkd.li/i/29557697"
          ]
        }
      ]
    }
  ]
});
