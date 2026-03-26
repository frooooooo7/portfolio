export type AvatarParticle = {
  className: string;
  duration: string;
  delay: string;
};

export const AVATAR_PARTICLES: AvatarParticle[] = [
  {
    className: "-left-6 top-3 size-1.5",
    duration: "4.8s",
    delay: "0s",
  },
  {
    className: "-right-5 top-6 size-2",
    duration: "4.2s",
    delay: "0.3s",
  },
  {
    className: "left-3 -top-5 size-1",
    duration: "5.4s",
    delay: "0.6s",
  },
  {
    className: "right-2 -bottom-5 size-1.5",
    duration: "4.6s",
    delay: "0.2s",
  },
  {
    className: "-left-4 bottom-6 size-2",
    duration: "5s",
    delay: "0.45s",
  },
];
