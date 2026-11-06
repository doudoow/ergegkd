// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "京东到家",
  "id": "com.jingdong.pdj",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "WebView[text=\"京东到家\"] >5 @View[clickable=true][childCount=1][visibleToUser=true] > View[childCount=1] > TextView[childCount=0] <<n [id=\"com.jingdong.pdj:id/mWebView\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13217796"
        },
        {
          "matches": "[id=\"com.jingdong.pdj:id/ivClose\"][desc=\"关闭\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13223282"
        },
        {
          "matches": "WebView[text=\"京东到家\"] >5 @View[clickable=true][childCount=1][visibleToUser=true] > View[childCount=1] > TextView[childCount=0] <<n [vid=\"mWebView\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13217796"
        },
        {
          "matches": "[vid=\"ivClose\"][desc=\"关闭\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13223282"
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "Button[text=\"暂不安装\"]",
          "activityIds": ".plunginupdate.update.UpdateDialogActivity",
          "snapshotUrls": "https://i.gkd.li/i/13217634",
          "key": 0
        },
        {
          "matches": "Button[text=\"暂不安装\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "key": 2,
      "rules": [
        {
          "matches": "WebView[text=\"京东到家\"] >7 TextView[text=\"\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13217796"
        },
        {
          "matches": "[id=\"com.jingdong.pdj:id/ivClose\"][desc=\"关闭\"]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13223282"
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "key": 3,
      "rules": [
        {
          "matches": "WebView[text=\"京东到家\"] >7 TextView[text=\"\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13217796"
        },
        {
          "matches": "[id=\"com.jingdong.pdj:id/ivClose\"][desc=\"关闭\"]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13223282"
        }
      ]
    },
    {
      "name": "首页广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "key": 4,
      "rules": [
        {
          "matches": "WebView[text=\"京东到家\"] >7 TextView[text=\"\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13217796"
        },
        {
          "matches": "[id=\"com.jingdong.pdj:id/ivClose\"][desc=\"关闭\"]",
          "quickFind": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13223282"
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "Button[text=\"暂不安装\"]",
          "key": 0
        }
      ]
    }
  ]
});
