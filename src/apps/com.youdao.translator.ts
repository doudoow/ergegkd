// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "有道翻译官",
  "id": "com.youdao.translator",
  "groups": [
    {
      "name": "局部广告-翻译界面-结果下方广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.youdao.translator:id/close_iv\"] + [id=\"com.youdao.translator:id/native_ad_flag_tv\"]",
          "activityIds": "com.youdao.translator.activity.trans.TransResultActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13259910",
          "key": 0
        },
        {
          "matches": "@ImageView[id=\"com.youdao.translator:id/close_iv\"] + [id=\"com.youdao.translator:id/native_ad_flag_tv\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13259910"
        },
        {
          "matches": "@ImageView[id=`com.youdao.translator:id/close_iv`] + [id=\"com.youdao.translator:id/native_ad_flag_tv\"]",
          "snapshotUrls": "https://i.gkd.li/import/13259910",
          "key": 2
        }
      ]
    },
    {
      "name": "分段广告-翻译结果下方广告",
      "desc": "①点击[x]掉 ②点击[不再展示]",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[vid=\"close_iv\"] + [vid=\"native_ad_flag_tv\"]",
          "key": 0,
          "name": "①点击[x]掉",
          "snapshotUrls": "https://i.gkd.li/i/13259910"
        },
        {
          "matches": "[text*=\"不再展示\"][clickable=true]",
          "preKeys": [
            0
          ],
          "name": "②点击[不再展示]",
          "snapshotUrls": "https://i.gkd.li/i/30857016",
          "exampleUrls": "https://e.gkd.li/7975274a-aa0b-4021-9624-5c1c3477cb9a",
          "key": 1
        }
      ]
    },
    {
      "name": "翻译界面-结果下方广告",
      "desc": "点击广告卡片右上角x",
      "enable": false,
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[id=`com.youdao.translator:id/close_iv`] + [id=\"com.youdao.translator:id/native_ad_flag_tv\"]",
          "snapshotUrls": "https://i.gkd.li/import/13259910",
          "key": 0
        }
      ]
    }
  ]
});
