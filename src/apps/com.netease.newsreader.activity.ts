// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "网易新闻",
  "id": "com.netease.newsreader.activity",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "desc": "点击暂不开启",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"开启系统推送\"] - ImageView < * < * < FrameLayout + FrameLayout >(3) Button[text=\"暂不开启\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12639800"
        },
        {
          "matches": "[text^=\"打开推送\"] +(2) RelativeLayout > ImageView",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12639869"
        }
      ]
    },
    {
      "name": "分段广告-首页信息流广告",
      "desc": "点击卡片广告x关闭按钮-关闭反馈理由弹窗",
      "key": 1,
      "rules": [
        {
          "matches": "FrameLayout[childCount=1] >5 TextView[text=\"广告\"] +2 ImageView[clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12639751"
        },
        {
          "matches": "[text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "name": "首页信息流广告-反馈理由",
          "snapshotUrls": "https://i.gkd.li/i/12639752",
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "order": -9,
      "key": 2,
      "rules": [
        {
          "matches": "[text$=\"版本更新了\"] +(2) RelativeLayout > [text=\"稍后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-系统推送弹窗",
      "desc": "检测到未开启系统推送-点击暂不开启",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text*=\"开启系统推送\"] - ImageView < * < * < FrameLayout + FrameLayout >(3) Button[text=\"暂不开启\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-系统推送提示信息",
      "desc": "点击顶部提醒右侧x按钮",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[text^=\"打开推送\"] +(2) RelativeLayout > ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页信息流广告",
      "desc": "点击广告卡片x关闭按钮-关闭反馈理由弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"不感兴趣\"]",
          "preKeys": [
            1
          ],
          "name": "首页信息流广告-反馈理由",
          "snapshotUrls": "https://i.gkd.li/i/12639752",
          "key": 0
        },
        {
          "matches": "FrameLayout[childCount=1] >5 TextView[text=\"广告\"] +2 ImageView[clickable=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12639751"
        }
      ]
    },
    {
      "name": "全屏广告-系统推送弹窗",
      "desc": "检测到未开启系统推送-点击暂不开启",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[text*=\"开启系统推送\"] - ImageView < * < * < FrameLayout + FrameLayout >(3) Button[text=\"暂不开启\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-系统推送提示信息",
      "desc": "点击顶部提醒右侧x按钮",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[text^=\"打开推送\"] +(2) RelativeLayout > ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页信息流广告",
      "desc": "点击广告卡片x关闭按钮-关闭反馈理由弹窗",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[text=\"不感兴趣\"]",
          "preKeys": [
            1
          ],
          "name": "首页信息流广告-反馈理由",
          "snapshotUrls": "https://i.gkd.li/import/12639752",
          "key": 0
        },
        {
          "matches": "FrameLayout[childCount=1] >5 TextView[text=\"广告\"] +2 ImageView[clickable=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12639751"
        }
      ]
    },
    {
      "name": "版本更新弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[text$=\"版本更新了\"] +(2) RelativeLayout > [text=\"稍后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "系统推送弹窗",
      "desc": "检测到未开启系统推送-点击暂不开启",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[text*=\"开启系统推送\"] - ImageView < * < * < FrameLayout + FrameLayout >(3) Button[text=\"暂不开启\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "系统推送提示信息",
      "desc": "点击顶部提醒右侧x按钮",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "[text^=\"打开推送\"] +(2) RelativeLayout > ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "首页信息流广告",
      "desc": "点击广告卡片x关闭按钮-关闭反馈理由弹窗",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "[text=\"不感兴趣\"]",
          "preKeys": [
            1
          ],
          "name": "首页信息流广告-反馈理由",
          "snapshotUrls": "https://i.gkd.li/import/12639752",
          "key": 0
        },
        {
          "matches": "FrameLayout[childCount=1] >5 TextView[text=\"广告\"] +2 ImageView[clickable=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12639751"
        }
      ]
    }
  ]
});
