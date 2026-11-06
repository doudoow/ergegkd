// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "米家",
  "id": "com.xiaomi.smarthome",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "key": 0,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] > ImageView[id!=null] + ImageView[clickable=true][id!=null]",
          "activityIds": "com.xiaomi.smarthome.SmartHomeMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12639658",
          "key": 0
        },
        {
          "matches": "RelativeLayout[childCount=2] > ImageView[id!=null] + ImageView[clickable=true][id!=null]",
          "activityIds": ".SmartHomeMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12639658",
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示-设备固件升级提示弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[text*=\"检测到\"&&text*=\"升级\"] < ViewGroup + ViewGroup > Button > [text = \"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/12639671",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-米家智惠广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] > ImageView[id!=null] + ImageView[clickable=true][id!=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12639658"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-设备固件升级提示弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text*=\"检测到\"&&text*=\"升级\"] < ViewGroup + ViewGroup > Button > [text = \"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-顶部横幅",
      "desc": "点击x掉",
      "key": 4,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] <3 ViewGroup < [visibleToUser=true] <2 [childCount=2] < [id=\"android:id/content\"]",
          "activityIds": ".framework.plugin.rn.PluginRNActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/29299389",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-各类广告",
      "desc": "关闭各类局部广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] > ImageView[id!=null] + ImageView[clickable=true][id!=null]",
          "activityIds": "com.xiaomi.smarthome.SmartHomeMainActivity",
          "key": 0,
          "name": "卡片广告1",
          "snapshotUrls": "https://i.gkd.li/i/12639658"
        },
        {
          "matches": "@[desc=\"关闭\"] <3 ViewGroup < [visibleToUser=true] <2 [childCount=2] < [id=\"android:id/content\"]",
          "activityIds": ".framework.plugin.rn.PluginRNActivity",
          "fastQuery": true,
          "key": 1,
          "name": "顶部横幅1",
          "snapshotUrls": "https://i.gkd.li/i/29299389"
        }
      ]
    },
    {
      "name": "全屏广告-米家智惠广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] > ImageView[id!=null] + ImageView[clickable=true][id!=null]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12639658"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-设备固件升级提示弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[text*=\"检测到\"&&text*=\"升级\"] < ViewGroup + ViewGroup > Button > [text = \"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "米家智惠广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] > ImageView[id!=null] + ImageView[clickable=true][id!=null]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12639658"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "设备固件升级提示弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[text*=\"检测到\"&&text*=\"升级\"] < ViewGroup + ViewGroup > Button > [text = \"取消\"]",
          "key": 0
        }
      ]
    }
  ]
});
