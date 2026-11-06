// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "HypeRate",
  "id": "io.hyperate.hyperateandroid",
  "groups": [
    {
      "name": "全屏广告",
      "key": 0,
      "rules": [
        {
          "matches": "@Image[childCount=0][text.length>0] < View[childCount=1] - View[childCount=1] > [text=\"Customize Now\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/23598900",
          "exampleUrls": "https://e.gkd.li/a9ee995f-1a7e-4663-86aa-b56a71e2ed5a",
          "key": 0
        }
      ]
    }
  ]
});
