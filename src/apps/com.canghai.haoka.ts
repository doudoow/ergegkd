// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "172号卡",
  "id": "com.canghai.haoka",
  "groups": [
    {
      "name": "通知提示-[公安部提示]弹窗",
      "desc": "点击[我已知晓，并承诺本人使用]",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"我已知晓，并承诺本人使用\"]",
          "activityIds": "io.dcloud.PandoraEntryActivity",
          "snapshotUrls": "https://i.gkd.li/i/15144791",
          "exampleUrls": "https://m.gkd.li/57941037/a2d6a74c-829c-4436-af5b-0893b6269886",
          "key": 0
        }
      ]
    }
  ]
});
