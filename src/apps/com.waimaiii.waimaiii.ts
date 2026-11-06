// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "歪麦霸王餐",
  "id": "com.waimaiii.waimaiii",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "View > View[childCount=2] > ImageView[clickable=true] + ImageView[id=\"\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13346187",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告",
      "key": 1,
      "rules": [
        {
          "matches": "[id$=\"ksad_ad_dislike\"] <n RelativeLayout - FrameLayout >3 [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/24790719",
          "exampleUrls": "https://e.gkd.li/5559308c-b40c-484f-a4ee-c162b507fb27"
        },
        {
          "matches": "ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1] <2 ViewGroup <2 ViewGroup <2 ViewGroup - ViewGroup >3 [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24656915"
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -10,
      "key": 2,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "fastQuery": true,
          "key": 0,
          "name": "【跳过+倒计时】型",
          "snapshotUrls": "https://i.gkd.li/i/13346166"
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_splash_skip_btn\"]",
          "key": 1,
          "name": "【圆圈跳过】型-穿山甲SDK",
          "snapshotUrls": "https://i.gkd.li/i/13346451"
        },
        {
          "matches": "[id=\"com.waimaiii.waimaiii:id/flContainer\"] >n FrameLayout[childCount=3] > FrameLayout + @View[clickable=true] + TextView",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13694837"
        },
        {
          "matches": "[id=\"android:id/content\"] >9 FrameLayout + View[clickable=true]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13930573"
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "View > View[childCount=2] > ImageView[clickable=true] + ImageView[id=\"\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13346187",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 4,
      "rules": [
        {
          "matches": "View > View[childCount=2] > ImageView[clickable=true] + ImageView[id=\"\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/13346187",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 5,
      "rules": [
        {
          "matches": "View > View[childCount=2] > ImageView[clickable=true] + ImageView[id=\"\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/13346187",
          "key": 0
        }
      ]
    }
  ]
});
