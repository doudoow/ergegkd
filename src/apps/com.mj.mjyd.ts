// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "追漫大全",
  "id": "com.mj.mjyd",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView < FrameLayout[childCount=1] <3 FrameLayout[childCount=5] <3 FrameLayout[childCount=5] >3 [text=\"立即下载\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12895086",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView < FrameLayout[childCount=1] <2 FrameLayout[childCount=6] >3 [text=\"立即下载\"]",
          "snapshotUrls": "https://i.gkd.li/i/12877729",
          "key": 0
        },
        {
          "matches": "@ImageView < FrameLayout[childCount=1] <3 FrameLayout[childCount=5] <3 FrameLayout[childCount=5] >3 [text=\"立即下载\"]",
          "snapshotUrls": "https://i.gkd.li/i/12895086",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView < FrameLayout[childCount=1] <2 FrameLayout[childCount=6] >3 [text=\"立即下载\"]",
          "snapshotUrls": "https://i.gkd.li/import/12877729",
          "key": 0
        },
        {
          "matches": "@ImageView < FrameLayout[childCount=1] <3 FrameLayout[childCount=5] <3 FrameLayout[childCount=5] >3 [text=\"立即下载\"]",
          "snapshotUrls": "https://i.gkd.li/import/12895086",
          "key": 1
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView < FrameLayout[childCount=1] <2 FrameLayout[childCount=6] >3 [text=\"立即下载\"]",
          "snapshotUrls": "https://i.gkd.li/import/12877729",
          "key": 0
        },
        {
          "matches": "@ImageView < FrameLayout[childCount=1] <3 FrameLayout[childCount=5] <3 FrameLayout[childCount=5] >3 [text=\"立即下载\"]",
          "snapshotUrls": "https://i.gkd.li/import/12895086",
          "key": 1
        }
      ]
    }
  ]
});
