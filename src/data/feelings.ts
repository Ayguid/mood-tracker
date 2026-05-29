import type { Feeling } from '../types';

export const nestedFeelings = {
  feelings: [
    {
      id: "A0",
      label: "Happy",
      emoji: "😀",
      color: "#fffebe",
      parent_id: null,
      children: [
        {
          id: 1,
          label: "Optimistic",
          emoji: "😄",
          parent_id: "A0",
          children: [
            { id: 2, label: "Hopeful", emoji: "🙂", parent_id: 1 },
            { id: 3, label: "Inspired", emoji: "😃", parent_id: 1 }
          ]
        },
        {
          id: 4,
          label: "Trusting",
          emoji: "🤝",
          parent_id: "A0",
          children: [
            { id: 5, label: "Sensitive", emoji: "😌", parent_id: 4 },
            { id: 6, label: "Intimate", emoji: "🤫", parent_id: 4 }
          ]
        },
        {
          id: 7,
          label: "Peaceful",
          emoji: "😌",
          parent_id: "A0",
          children: [
            { id: 8, label: "Loving", emoji: "🥰", parent_id: 7 },
            { id: 9, label: "Thankful", emoji: "🙏", parent_id: 7 }
          ]
        },
        {
          id: 10,
          label: "Powerful",
          emoji: "💪",
          parent_id: "A0",
          children: [
            { id: 11, label: "Courageous", emoji: "🦁", parent_id: 10 },
            { id: 12, label: "Creative", emoji: "🎨", parent_id: 10 }
          ]
        },
        {
          id: 13,
          label: "Accepted",
          emoji: "🤗",
          parent_id: "A0",
          children: [
            { id: 14, label: "Respected", emoji: "👏", parent_id: 13 },
            { id: 15, label: "Valued", emoji: "💎", parent_id: 13 }
          ]
        },
        {
          id: 16,
          label: "Proud",
          emoji: "🦚",
          parent_id: "A0",
          children: [
            { id: 17, label: "Successful", emoji: "🏆", parent_id: 16 },
            { id: 18, label: "Confident", emoji: "😎", parent_id: 16 }
          ]
        },
        {
          id: 19,
          label: "Interested",
          emoji: "🤔",
          parent_id: "A0",
          children: [
            { id: 20, label: "Curious", emoji: "🔍", parent_id: 19 },
            { id: 21, label: "Inquisitive", emoji: "❓", parent_id: 19 }
          ]
        },
        {
          id: 22,
          label: "Content",
          emoji: "😌",
          parent_id: "A0",
          children: [
            { id: 23, label: "Joyful", emoji: "😁", parent_id: 22 },
            { id: 24, label: "Free", emoji: "🕊️", parent_id: 22 }
          ]
        },
        {
          id: 25,
          label: "Playful",
          emoji: "🎾",
          parent_id: "A0",
          children: [
            { id: 26, label: "Cheeky", emoji: "😜", parent_id: 25 },
            { id: 27, label: "Aroused", emoji: "😳", parent_id: 25 }
          ]
        }
      ]
    },
    {
      id: "A2",
      label: "Surprised",
      emoji: "😲",
      color: "#dbcbe5",
      parent_id: null,
      children: [
        {
          id: 29,
          label: "Excited",
          emoji: "🤩",
          parent_id: "A2",
          children: [
            { id: 30, label: "Energetic", emoji: "⚡", parent_id: 29 },
            { id: 31, label: "Eager", emoji: "🔥", parent_id: 29 }
          ]
        },
        {
          id: 32,
          label: "Amazed",
          emoji: "😲",
          parent_id: "A2",
          children: [
            { id: 33, label: "Awe", emoji: "🙌", parent_id: 32 },
            { id: 34, label: "Astonished", emoji: "😮", parent_id: 32 }
          ]
        },
        {
          id: 35,
          label: "Confused",
          emoji: "😕",
          parent_id: "A2",
          children: [
            { id: 36, label: "Perplexed", emoji: "😖", parent_id: 35 },
            { id: 37, label: "Disillusioned", emoji: "😞", parent_id: 35 }
          ]
        },
        {
          id: 38,
          label: "Startled",
          emoji: "😨",
          parent_id: "A2",
          children: [
            { id: 39, label: "Dismayed", emoji: "😧", parent_id: 38 },
            { id: 40, label: "Shocked", emoji: "😱", parent_id: 38 }
          ]
        }
      ]
    },
    {
      id: 41,
      label: "Bad",
      emoji: "🙁",
      color: "#bfebd4",
      parent_id: null,
      children: [
        {
          id: 42,
          label: "Tired",
          emoji: "😴",
          parent_id: 41,
          children: [
            { id: 43, label: "Unfocused", emoji: "😵", parent_id: 42 },
            { id: 44, label: "Sleepy", emoji: "💤", parent_id: 42 }
          ]
        },
        {
          id: 45,
          label: "Stressed",
          emoji: "😫",
          parent_id: 41,
          children: [
            { id: 46, label: "Out of control", emoji: "🌀", parent_id: 45 },
            { id: 47, label: "Overwhelmed", emoji: "😩", parent_id: 45 }
          ]
        },
        {
          id: 48,
          label: "Busy",
          emoji: "📅",
          parent_id: 41,
          children: [
            { id: 49, label: "Rushed", emoji: "⏰", parent_id: 48 },
            { id: 50, label: "Pressured", emoji: "😓", parent_id: 48 }
          ]
        },
        {
          id: 51,
          label: "Bored",
          emoji: "🥱",
          parent_id: 41,
          children: [
            { id: 52, label: "Apathetic", emoji: "😐", parent_id: 51 },
            { id: 53, label: "Indifferent", emoji: "🤷", parent_id: 51 }
          ]
        }
      ]
    },
    {
      id: 54,
      label: "Fearful",
      emoji: "😨",
      color: "#fdefbe",
      parent_id: null,
      children: [
        {
          id: 55,
          label: "Scared",
          emoji: "😱",
          parent_id: 54,
          children: [
            { id: 56, label: "Helpless", emoji: "🥺", parent_id: 55 },
            { id: 57, label: "Frightened", emoji: "😰", parent_id: 55 }
          ]
        },
        {
          id: 58,
          label: "Anxious",
          emoji: "😟",
          parent_id: 54,
          children: [
            { id: 59, label: "Overwhelmed", emoji: "😩", parent_id: 58 },
            { id: 60, label: "Worried", emoji: "😔", parent_id: 58 }
          ]
        },
        {
          id: 61,
          label: "Insecure",
          emoji: "😔",
          parent_id: 54,
          children: [
            { id: 62, label: "Inadequate", emoji: "😞", parent_id: 61 },
            { id: 63, label: "Inferior", emoji: "😣", parent_id: 61 }
          ]
        },
        {
          id: 64,
          label: "Weak",
          emoji: "🫠",
          parent_id: 54,
          children: [
            { id: 65, label: "Worthless", emoji: "💀", parent_id: 64 },
            { id: 66, label: "Insignificant", emoji: "🌀", parent_id: 64 }
          ]
        },
        {
          id: 67,
          label: "Rejected",
          emoji: "🚫",
          parent_id: 54,
          children: [
            { id: 68, label: "Excluded", emoji: "🙅", parent_id: 67 },
            { id: 69, label: "Persecuted", emoji: "⚖️", parent_id: 67 }
          ]
        },
        {
          id: 70,
          label: "Threatened",
          emoji: "⚠️",
          parent_id: 54,
          children: [
            { id: 71, label: "Nervous", emoji: "😬", parent_id: 70 },
            { id: 72, label: "Exposed", emoji: "🫣", parent_id: 70 }
          ]
        }
      ]
    },
    {
      id: 73,
      label: "Angry",
      emoji: "😠",
      color: "#ffbfbf",
      parent_id: null,
      children: [
        {
          id: 74,
          label: "Let down",
          emoji: "😔",
          parent_id: 73,
          children: [
            { id: 75, label: "Betrayed", emoji: "🗡️", parent_id: 74 },
            { id: 76, label: "Resentful", emoji: "😤", parent_id: 74 }
          ]
        },
        {
          id: 77,
          label: "Humiliated",
          emoji: "😳",
          parent_id: 73,
          children: [
            { id: 78, label: "Disrespectful", emoji: "🙄", parent_id: 77 },
            { id: 79, label: "Ridiculed", emoji: "😂", parent_id: 77 }
          ]
        },
        {
          id: 80,
          label: "Bitter",
          emoji: "😖",
          parent_id: 73,
          children: [
            { id: 81, label: "Indignant", emoji: "😤", parent_id: 80 },
            { id: 82, label: "Violated", emoji: "🚨", parent_id: 80 }
          ]
        },
        {
          id: 83,
          label: "Mad",
          emoji: "🤬",
          parent_id: 73,
          children: [
            { id: 84, label: "Furious", emoji: "😡", parent_id: 83 },
            { id: 85, label: "Jealous", emoji: "💚", parent_id: 83 }
          ]
        },
        {
          id: 86,
          label: "Aggressive",
          emoji: "👊",
          parent_id: 73,
          children: [
            { id: 87, label: "Provoked", emoji: "⚡", parent_id: 86 },
            { id: 88, label: "Hostile", emoji: "😠", parent_id: 86 }
          ]
        },
        {
          id: 89,
          label: "Frustrated",
          emoji: "😫",
          parent_id: 73,
          children: [
            { id: 90, label: "Infuriated", emoji: "🤯", parent_id: 89 },
            { id: 91, label: "Annoyed", emoji: "🙄", parent_id: 89 }
          ]
        },
        {
          id: 92,
          label: "Distant",
          emoji: "🏔️",
          parent_id: 73,
          children: [
            { id: 93, label: "Withdrawn", emoji: "🙇", parent_id: 92 },
            { id: 94, label: "Numb", emoji: "😶", parent_id: 92 }
          ]
        },
        {
          id: 95,
          label: "Critical",
          emoji: "✍️",
          parent_id: 73,
          children: [
            { id: 96, label: "Skeptical", emoji: "🤨", parent_id: 95 },
            { id: 97, label: "Dismissive", emoji: "🙄", parent_id: 95 }
          ]
        }
      ]
    },
    {
      id: 98,
      label: "Disgusted",
      emoji: "🤢",
      color: "#bfbfbf",
      parent_id: null,
      children: [
        {
          id: 99,
          label: "Disapproving",
          emoji: "👎",
          parent_id: 98,
          children: [
            { id: 100, label: "Judgmental", emoji: "⚖️", parent_id: 99 },
            { id: 101, label: "Embarrassed", emoji: "😳", parent_id: 99 }
          ]
        },
        {
          id: 102,
          label: "Disappointed",
          emoji: "😞",
          parent_id: 98,
          children: [
            { id: 103, label: "Appalled", emoji: "😱", parent_id: 102 },
            { id: 104, label: "Revolted", emoji: "🤮", parent_id: 102 }
          ]
        },
        {
          id: 105,
          label: "Awful",
          emoji: "😖",
          parent_id: 98,
          children: [
            { id: 106, label: "Nauseated", emoji: "🤢", parent_id: 105 },
            { id: 107, label: "Detestable", emoji: "🐀", parent_id: 105 }
          ]
        },
        {
          id: 108,
          label: "Repelled",
          emoji: "🚫",
          parent_id: 98,
          children: [
            { id: 109, label: "Horrified", emoji: "😨", parent_id: 108 },
            { id: 110, label: "Hesitant", emoji: "🤔", parent_id: 108 }
          ]
        }
      ]
    },
    {
      id: 111,
      label: "Sad",
      emoji: "😔",
      color: "#c0dbf0",
      parent_id: null,
      children: [
        {
          id: 112,
          label: "Hurt",
          emoji: "💔",
          parent_id: 111,
          children: [
            { id: 113, label: "Embarrassed", emoji: "😳", parent_id: 112 },
            { id: 114, label: "Disappointed", emoji: "😞", parent_id: 112 }
          ]
        },
        {
          id: 115,
          label: "Depressed",
          emoji: "😩",
          parent_id: 111,
          children: [
            { id: 116, label: "Inferior", emoji: "⬇️", parent_id: 115 },
            { id: 117, label: "Empty", emoji: "🕳️", parent_id: 115 }
          ]
        },
        {
          id: 118,
          label: "Guilty",
          emoji: "😓",
          parent_id: 111,
          children: [
            { id: 119, label: "Remorseful", emoji: "😔", parent_id: 118 },
            { id: 120, label: "Ashamed", emoji: "😳", parent_id: 118 }
          ]
        },
        {
          id: 121,
          label: "Despair",
          emoji: "😫",
          parent_id: 111,
          children: [
            { id: 122, label: "Powerless", emoji: "⚡", parent_id: 121 },
            { id: 123, label: "Grief", emoji: "🥀", parent_id: 121 }
          ]
        },
        {
          id: 124,
          label: "Vulnerable",
          emoji: "🫂",
          parent_id: 111,
          children: [
            { id: 125, label: "Fragile", emoji: "🪺", parent_id: 124 },
            { id: 126, label: "Victimized", emoji: "⚖️", parent_id: 124 }
          ]
        },
        {
          id: 127,
          label: "Lonely",
          emoji: "😔",
          parent_id: 111,
          children: [
            { id: 128, label: "Abandoned", emoji: "🏚️", parent_id: 127 },
            { id: 129, label: "Isolated", emoji: "🏝️", parent_id: 127 }
          ]
        }
      ]
    }
  ]
};

function flattenFeelings(nodes: any[], parentId: string | number | null = null): Feeling[] {
  let result: Feeling[] = [];
  for (const node of nodes) {
    const { children, ...rest } = node;
    result.push({
      ...rest,
      parent_id: parentId,
    });
    if (children && children.length) {
      result = result.concat(flattenFeelings(children, node.id));
    }
  }
  return result;
}

export const baseFeelings: Feeling[] = flattenFeelings(nestedFeelings.feelings);