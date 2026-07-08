import { describe, it, expect } from 'vitest';
import { NextBitDeskifyError, isNextBitDeskifyError } from '@/utils/error';

describe('NextBitDeskifyError', () => {
  it('is an Error flagged as a user error with the right name', () => {
    const err = new NextBitDeskifyError('boom');

    expect(err).toBeInstanceOf(Error);
    expect(err.isUserError).toBe(true);
    expect(err.name).toBe('NextBitDeskifyError');
    expect(err.message).toBe('boom');
  });
});

describe('isNextBitDeskifyError', () => {
  it('returns true for a NextBitDeskifyError instance', () => {
    expect(isNextBitDeskifyError(new NextBitDeskifyError('x'))).toBe(true);
  });

  it('returns true for a duck-typed object with isUserError === true', () => {
    // Cross-module instances may fail instanceof, so the flag is also accepted.
    expect(isNextBitDeskifyError({ isUserError: true })).toBe(true);
  });

  it('returns false for a plain Error', () => {
    expect(isNextBitDeskifyError(new Error('x'))).toBe(false);
  });

  it('returns false for an object whose isUserError is not strictly true', () => {
    expect(isNextBitDeskifyError({ isUserError: false })).toBe(false);
    expect(isNextBitDeskifyError({})).toBe(false);
  });

  it('returns false for null and undefined (typeof null === "object" guard)', () => {
    expect(isNextBitDeskifyError(null)).toBe(false);
    expect(isNextBitDeskifyError(undefined)).toBe(false);
  });
});
