// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Gspace",
  "id": "com.gspace.android",
  "groups": [
    {
      "name": "局部广告-主页面上方广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.gspace.android:id/hiad_banner_close_button\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12705339"
        },
        {
          "matches": "@Image < View -2 View > View > View TextView[text=\"广告\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12910419",
            "https://i.gkd.li/i/12910935"
          ]
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\" && text= \"不感兴趣\"]",
          "preKeys": 1,
          "snapshotUrls": "https://i.gkd.li/i/12910420",
          "key": 2
        },
        {
          "matches": "[vid=\"hiad_banner_close_button\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12705339"
        }
      ]
    },
    {
      "name": "全屏广告-Youtube播放视频跳过广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.google.android.youtube:id/skip_ad_button\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-主页面上方广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.gspace.android:id/hiad_banner_close_button\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12705339"
        },
        {
          "matches": "@Image < View -2 View > View > View TextView[text=\"广告\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12910419",
            "https://i.gkd.li/i/12910935"
          ]
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\" && text= \"不感兴趣\"]",
          "preKeys": 1,
          "snapshotUrls": "https://i.gkd.li/i/12910420",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-Youtube播放视频跳过广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.google.android.youtube:id/skip_ad_button\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "主页面上方广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.gspace.android:id/hiad_banner_close_button\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12705339"
        },
        {
          "matches": "@Image < View -2 View > View > View TextView[text=\"广告\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12910419",
            "https://i.gkd.li/import/12910935"
          ]
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\" && text= \"不感兴趣\"]",
          "preKeys": 1,
          "snapshotUrls": "https://i.gkd.li/import/12910420",
          "key": 2
        }
      ]
    },
    {
      "name": "Youtube播放视频跳过广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.google.android.youtube:id/skip_ad_button\"]",
          "key": 0
        }
      ]
    }
  ]
});
