// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "一个木函",
  "id": "com.One.WoodenLetter",
  "groups": [
    {
      "name": "局部广告",
      "desc": "x掉",
      "key": 0,
      "rules": [
        {
          "matches": "ImageView[width>540] + View -> ImageView[width<71] - View[text=null][clickable=true]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/25547842",
          "key": 0
        }
      ]
    },
    {
      "name": "评价提示",
      "desc": "①勾选[不再显示] ②点击x掉",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"不再显示\"][checked=false]",
          "key": 0,
          "name": "①勾选[不再显示]",
          "snapshotUrls": "https://i.gkd.li/i/29465827"
        },
        {
          "matches": [
            "[text*=\"好评\"]",
            "[vid=\"dialog_close_view\"]"
          ],
          "key": 1,
          "name": "②点击x掉",
          "snapshotUrls": [
            "https://i.gkd.li/i/28805036",
            "https://i.gkd.li/i/29465828"
          ]
        }
      ]
    },
    {
      "name": "功能类-[关闭]保存成功弹窗",
      "desc": "点击x掉",
      "key": 2,
      "rules": [
        {
          "matches": "[getChild(0).text*=\"保存成功\"] + [vid=\"dialog_close_view\"]",
          "activityIds": [
            ".MainActivity",
            ".program.devicetools.appmanager.AppManagerActivity",
            ".program.imageutils."
          ],
          "forcedTime": 1800000,
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/32636850",
            "https://i.gkd.li/i/32635902",
            "https://i.gkd.li/i/32636933",
            "https://i.gkd.li/i/32636972"
          ],
          "exampleUrls": "https://e.gkd.li/5c650324-bf22-4d9f-9fe0-2c0b738040c4",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][width<96] - [text*=\"新版本\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/33833127",
          "key": 0
        }
      ]
    }
  ]
});
