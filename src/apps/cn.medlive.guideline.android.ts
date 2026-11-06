// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "临床指南",
  "id": "cn.medlive.guideline.android",
  "groups": [
    {
      "name": "全屏广告",
      "key": 0,
      "rules": [
        {
          "matches": "ViewGroup > [vid=\"imgAd\"] + [vid=\"icClose\"][clickable=true][visibleToUser=true]",
          "activityIds": "cn.medlive.vip.AdDialogActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25769524",
          "exampleUrls": "https://e.gkd.li/bce1c836-88d1-49a0-a417-b2ecca2991ab"
        },
        {
          "matches": "@Button[clickable=true][visibleToUser=true] + [text=\"开通用药会员\"] <2 View[childCount=5]",
          "activityIds": "com.quick.jsbridge.view.QuickWebLoader",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/25769624",
          "exampleUrls": "https://e.gkd.li/2ee23070-6091-49e3-b035-02618bc1e3df"
        }
      ]
    },
    {
      "name": "功能类-签到自动退出",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > [vid=\"clDialog\"] + [vid=\"ivClose\"][clickable=true][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25769782",
          "exampleUrls": "https://e.gkd.li/6f3a356e-cca2-4526-be9c-ed8bf4113ea7"
        },
        {
          "matches": "[vid=\"included_layout_title\"] > @ImageButton[clickable=true][visibleToUser=true] + [vid=\"app_header_title\"]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/25769880",
          "exampleUrls": "https://e.gkd.li/bcc9072e-a4f1-4509-b667-9aab569742cf",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-说明书自动翻译",
      "desc": "药品说明书-点击右下角翻译按钮",
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"llBottom\"] > [vid=\"tvTranslate\"][clickable=true][visibleToUser=true]",
          "activityIds": "cn.medlive.drug.ui.DrugDetailActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/25770071",
            "https://i.gkd.li/i/25770005"
          ],
          "exampleUrls": [
            "https://e.gkd.li/06c6e7b8-edc7-43ea-a626-9bcb8c80c11a",
            "https://e.gkd.li/7855c4ce-eae0-4152-a2f0-ecd2ab4f2904"
          ],
          "key": 0
        }
      ]
    }
  ]
});
