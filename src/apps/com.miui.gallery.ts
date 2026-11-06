// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小米相册",
  "id": "com.miui.gallery",
  "groups": [
    {
      "name": "功能类-删除时勾选[同时从云端删除]",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"同时从云端删除\"][checked=false]",
          "activityIds": "com.miui.gallery.activity.InternalPhotoPageActivity",
          "snapshotUrls": "https://i.gkd.li/i/15804289",
          "key": 0
        },
        {
          "matches": "[text=\"同时从云端删除\"][checked=false]",
          "activityIds": ".activity.InternalPhotoPageActivity",
          "snapshotUrls": "https://i.gkd.li/i/15804289",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-流量同步自动点击[继续同步]",
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text^=\"当前处于移动网络下，继续同步将消耗\"]",
            "[text=\"继续同步\"]"
          ],
          "activityIds": ".activity.BackupDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23124555",
          "key": 0
        }
      ]
    },
    {
      "name": "其他-图片保存成功弹窗",
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text=\"图片已经保存到相册\"]",
            "[text=\"确定\"]"
          ],
          "activityIds": ".activity.ExternalPhotoPageActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23383772",
          "key": 0
        }
      ]
    }
  ]
});
