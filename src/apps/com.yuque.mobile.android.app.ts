// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "语雀",
  "id": "com.yuque.mobile.android.app",
  "groups": [
    {
      "name": "局部广告-\"用语雀公众号\"横幅提示",
      "desc": "点x取消提示",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "TextView[text=\"了解更多\"] + ViewGroup[clickable=true]",
          "activityIds": "com.yuque.mobile.android.app.rn.activity.ReactNativeMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12911014",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动原图",
      "desc": "如果没有勾选原图, 则勾选",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "ViewGroup[desc=\"原图未勾选\"][clickable=true][childCount=2]",
          "activityIds": "com.yuque.mobile.android.app.rn.activity.ReactNativeMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12911013",
          "key": 0
        },
        {
          "matches": "ViewGroup[desc=\"原图未勾选\"][clickable=true][childCount=2]",
          "activityIds": ".rn.activity.ReactNativeMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12911013",
          "key": 1
        },
        {
          "matches": "ViewGroup[desc=\"原图未勾选\"][clickable=true][childCount=2]",
          "snapshotUrls": "https://i.gkd.li/import/12911013",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-横幅提示",
      "desc": "点x取消提示",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "TextView[text=\"了解更多\"] + ViewGroup[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12911014",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-自动原图",
      "desc": "如果没有勾选原图, 则勾选",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "ViewGroup[desc=\"原图未勾选\"][clickable=true][childCount=2]",
          "snapshotUrls": "https://i.gkd.li/i/12911013",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-[用语雀公众号]横幅提示",
      "desc": "点x取消提示",
      "key": 4,
      "rules": [
        {
          "matches": "TextView[text=\"了解更多\"] + ViewGroup[clickable=true]",
          "activityIds": ".rn.activity.ReactNativeMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12911014",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-横幅提示",
      "desc": "点x取消提示",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "TextView[text=\"了解更多\"] + ViewGroup[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/12911014",
          "key": 0
        }
      ]
    },
    {
      "name": "横幅提示",
      "desc": "点x取消提示",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "TextView[text=\"了解更多\"] + ViewGroup[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/12911014",
          "key": 0
        }
      ]
    },
    {
      "name": "自动原图",
      "desc": "如果没有勾选原图, 则勾选",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "ViewGroup[desc=\"原图未勾选\"][clickable=true][childCount=2]",
          "snapshotUrls": "https://i.gkd.li/import/12911013",
          "key": 0
        }
      ]
    }
  ]
});
