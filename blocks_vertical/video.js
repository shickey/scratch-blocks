/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2018 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Blockly.Blocks['video_videos_menu'] = {
  /**
   * Videos drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VIDEO_MENU",
            "options": [
              ['1', '0'],
              ['2', '1'],
              ['3', '2'],
              ['4', '3'],
              ['5', '4'],
              ['6', '5'],
              ['7', '6'],
              ['8', '7'],
              ['9', '8'],
              ['10', '9']
            ]
          }
        ],
        "colour": Blockly.Colours.more.secondary,
        "colourSecondary": Blockly.Colours.more.secondary,
        "colourTertiary": Blockly.Colours.more.tertiary,
        "extensions": ["output_string"]
      });
  }
};

 Blockly.Blocks['video_playuntildone'] = {
  /**
   * Block to play video until done.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "play video %1 until done",
      "args0": [
        {
          "type": "input_value",
          "name": "VIDEO_MENU"
        }
      ],
      "extensions": ["colours_more", "shape_statement"]
    });
  }
};

 Blockly.Blocks['video_start'] = {
  /**
   * Block to play video until done.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "start video %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VIDEO_MENU"
        }
      ],
      "extensions": ["colours_more", "shape_statement"]
    });
  }
};

Blockly.Blocks['video_rotaterightby'] = {
  /**
   * Block to glide for a specified time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "rotate %1 %2 degrees",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "rotate-right.svg",
          "width": 24,
          "height": 24
        },
        {
          "type": "input_value",
          "name": "DEGREES"
        }
      ],
      "extensions": ["colours_more", "shape_statement"]
    });
  }
};

Blockly.Blocks['video_rotateleftby'] = {
  /**
   * Block to glide for a specified time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "rotate %1 %2 degrees",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "rotate-left.svg",
          "width": 24,
          "height": 24
        },
        {
          "type": "input_value",
          "name": "DEGREES"
        }
      ],
      "extensions": ["colours_more", "shape_statement"]
    });
  }
};

Blockly.Blocks['video_setrotation'] = {
  /**
   * Block to glide for a specified time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "set rotation to %1 degrees",
      "args0": [
        {
          "type": "input_value",
          "name": "DEGREES"
        }
      ],
      "extensions": ["colours_more", "shape_statement"]
    });
  }
};

Blockly.Blocks['video_changesizeby'] = {
  /**
   * Block to glide for a specified time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "change size by %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PERCENTAGE"
        }
      ],
      "extensions": ["colours_more", "shape_statement"]
    });
  }
};

Blockly.Blocks['video_setsize'] = {
  /**
   * Block to glide for a specified time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "set size to %1%%",
      "args0": [
        {
          "type": "input_value",
          "name": "PERCENTAGE"
        }
      ],
      "extensions": ["colours_more", "shape_statement"]
    });
  }
};

Blockly.Blocks['video_effect_menu_options'] = {
  /**
   * Videos drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VIDEO_EFFECT_MENU",
            "options": [
              ['color', 'COLOR'],
              ['whirl', 'WHIRL'],
              ['crystallize', 'CRYSTALLIZE'],
              ['kaleidoscope', 'KALEIDOSCOPE']
            ]
          }
        ],
        "colour": Blockly.Colours.more.secondary,
        "colourSecondary": Blockly.Colours.more.secondary,
        "colourTertiary": Blockly.Colours.more.tertiary,
        "extensions": ["output_string"]
      });
  }
};

Blockly.Blocks['video_changeeffectby'] = {
  /**
   * Block to change graphic effect.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "change %1 effect by %2",
      "args0": [
        {
          "type": "input_value",
          "name": "EFFECT"
        },
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "extensions": ["colours_more", "shape_statement"]
    });
  }
};

Blockly.Blocks['video_seteffectto'] = {
  /**
   * Block to set graphic effect.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "set %1 effect to %2",
      "args0": [
        {
          "type": "input_value",
          "name": "EFFECT"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "extensions": ["colours_more", "shape_statement"]
    });
  }
};

Blockly.Blocks['video_clearvideoeffects'] = {
  /**
   * Block to clear graphic effects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "clear video effects",
      "extensions": ["colours_more", "shape_statement"]
    });
  }
};
