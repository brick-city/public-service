/* eslint-disable import/prefer-default-export */
/* eslint-disable no-bitwise */

/**
 *
 * Returns an array of boolean representing the bits in the buffer
 *
 * @param {Buffer} buffer The buffer to check the bits on
 * @returns {Array<boolean>} An array of booleans corresponding to the bits of the buffer
 */

export const maskToBits = (buffer) => {

    const bufferLength = buffer.byteLength;

    /**
     * @type {Array<boolean>}
     */
    const bits = [];

    buffer.forEach((byte, index) => {

        const i = (bufferLength - index - 1) * 8;

        bits[i] = !!(byte & 1);
        bits[i + 1] = !!((byte >> 1) & 1);
        bits[i + 2] = !!((byte >> 2) & 1);
        bits[i + 3] = !!((byte >> 3) & 1);
        bits[i + 4] = !!((byte >> 4) & 1);
        bits[i + 5] = !!((byte >> 5) & 1);
        bits[i + 6] = !!((byte >> 6) & 1);
        bits[i + 7] = !!((byte >> 7) & 1);

    });

    return bits;

};
