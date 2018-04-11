/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Layout} from '../../../src/layout';

export class AmpCloudinary extends AMP.BaseElement {

  /** @param {!AmpElement} element */
  constructor(element) {
    super(element);
    /** @private {string} */
    this.src = element.getAttribute('src')
    /** @private */
    this.width= element.getAttribute('width')
    /** @private */
    this.height= element.getAttribute('height')
  }

  /** @override */
  buildCallback() {
    const img = this.win.document.createElement('amp-img');
    this.propagateAttributes(['aria-label'], img);
    img.setAttribute('src',this.src)
    img.setAttribute('width',this.width)
    img.setAttribute('height',this.height)
    img.setAttribute('noprerender', '');
    img.setAttribute('layout', 'fill');
    img.setAttribute('img', '');
    img.setAttribute('referrerpolicy', 'origin');
    this.element.appendChild(img);
    this.applyFillContent(img, /* replacedContent */ true);
  }

  /** @override */
  isLayoutSupported(layout) {
    return layout == Layout.RESPONSIVE;
  }
}

AMP.registerElement('amp-cloudinary', AmpCloudinary);
