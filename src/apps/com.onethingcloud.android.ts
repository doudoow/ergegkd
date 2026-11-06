// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "网心云",
  "id": "com.onethingcloud.android",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@View[desc*=\"跳过\"][desc.length<10][visibleToUser=true] < View < View < View < View < FrameLayout < [id=\"android:id/content\"]",
          "action": "clickCenter",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18094505",
          "exampleUrls": "https://e.gkd.li/0d0560e5-2b7d-4599-8336-a5254d5e13ea",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][index=parent.childCount.minus(1)] <(2,3) View[getChild(0).text=null] < View < View[childCount=2] < View < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "com.onethingcloud.android.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14766665",
            "https://i.gkd.li/i/16438609"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/18094505",
          "key": 0
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][index=parent.childCount.minus(1)] <(2,3) View[getChild(0).text=null] < View < View[childCount=2] < View < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14766665",
            "https://i.gkd.li/i/16438609"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/18094505",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >(3,4) View[childCount=2] >2 View[childCount=3] > ImageView[index=2][clickable=true]",
          "key": 0
        },
        {
          "matches": "FrameLayout >8 View > ImageView + ImageView + ImageView[clickable=true]",
          "key": 1
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "FrameLayout >8 View > ImageView + ImageView + ImageView[clickable=true]",
          "key": 0
        }
      ]
    }
  ]
});
