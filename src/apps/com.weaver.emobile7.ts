// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "EMobile7",
  "id": "com.weaver.emobile7",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "@[id=\"com.weaver.emobile7:id/sdl__negative_button\"][text=\"取消\"] +(2) [id=\"com.weaver.emobile7:id/sdl__positive_button\"][text=\"更新\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12673154"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@[id=\"com.weaver.emobile7:id/sdl__negative_button\"][text=\"取消\"] +(2) [id=\"com.weaver.emobile7:id/sdl__positive_button\"][text=\"更新\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12673154"
          ],
          "key": 0
        }
      ]
    }
  ]
});
