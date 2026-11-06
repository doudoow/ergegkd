// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "剧多多",
  "id": "com.juduoduo.app",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13705650"
        },
        {
          "matches": "[id=\"com.juduoduo.app:id/ksad_tk_view\"] @ViewGroup[clickable=true] > [text=\"跳过\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13705662"
        },
        {
          "matches": "[vid=\"ksad_tk_view\"] @ViewGroup[clickable=true] > [text=\"跳过\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13705662"
        },
        {
          "matches": "ImageView[width<90][height<90] < @ViewGroup[clickable=true] <<n [id=\"com.juduoduo.app:id/ksad_tk_view\"]",
          "snapshotUrls": "https://i.gkd.li/import/13705650",
          "key": 3
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "desc": "快手广告SDK",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView[width<90][height<90] < @ViewGroup[clickable=true] <<n [id=\"com.juduoduo.app:id/ksad_tk_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/13705650",
          "key": 0
        },
        {
          "matches": "[id=\"com.juduoduo.app:id/ksad_tk_view\"] @ViewGroup[clickable=true] > [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/13705662",
          "key": 1
        }
      ]
    },
    {
      "name": "弹窗广告",
      "desc": "快手广告SDK",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView[width<90][height<90] < @ViewGroup[clickable=true] <<n [id=\"com.juduoduo.app:id/ksad_tk_view\"]",
          "snapshotUrls": "https://i.gkd.li/import/13705650",
          "key": 0
        },
        {
          "matches": "[id=\"com.juduoduo.app:id/ksad_tk_view\"] @ViewGroup[clickable=true] > [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/import/13705662",
          "key": 1
        }
      ]
    }
  ]
});
