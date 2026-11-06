// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "剪映",
  "id": "com.lemon.lv",
  "groups": [
    {
      "name": "分段广告-导出界面底部广告",
      "desc": "点击[关闭]-点击[不感兴趣]",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "LynxAdComponentView < * > @FlattenUIImage <<n [vid=\"exportAdContainer\"]",
          "key": 0,
          "name": "点击[关闭]",
          "snapshotUrls": "https://i.gkd.li/i/14648627"
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "点击[不感兴趣]",
          "snapshotUrls": "https://i.gkd.li/i/14648626"
        }
      ]
    },
    {
      "name": "局部广告-选择素材界面上方广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@LynxFlattenUI[clickable=true][visibleToUser=true] +6 [text=\"立即下载\"]",
          "activityIds": "com.vega.libcutsame.select.view.CutSameSelectMediaActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14122865",
          "key": 0
        },
        {
          "matches": "[vid=\"gallery_layout_below_category_view\"] >3 [text=\"立即下载\"] -n LynxFlattenUI[clickable=true]",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-恢复创作",
      "desc": "自动点击[立即恢复]按钮",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"tv_title_resume_design\"] +2 [vid=\"tvResumeNow\"]",
          "activityIds": "com.vega.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14292755",
          "key": 0
        },
        {
          "matches": "[vid=\"tv_title_resume_design\"] +2 [vid=\"tvResumeNow\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-导出界面底部广告",
      "desc": "关闭完成导出后的下方广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@FlattenUIImage + LynxAdComponentView",
          "snapshotUrls": "https://i.gkd.li/import/12911010",
          "key": 0
        }
      ]
    },
    {
      "name": "导出界面底部广告",
      "desc": "关闭完成导出后的下方广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@FlattenUIImage + LynxAdComponentView",
          "snapshotUrls": "https://i.gkd.li/import/12911010",
          "key": 0
        }
      ]
    }
  ]
});
