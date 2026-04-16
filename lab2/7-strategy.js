class SortingStrategy {
  sort(arr) {
    return arr;
  }
}

class BubbleSort extends SortingStrategy {
  sort(arr) {
    const result = [...arr];

    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result.length - 1 - i; j++) {
        if (result[j] > result[j + 1]) {
          const temp = result[j];
          result[j] = result[j + 1];
          result[j + 1] = temp;
        }
      }
    }

    return result;
  }
}

class QuickSort extends SortingStrategy {
  sort(arr) {
    if (arr.length <= 1) {
      return [...arr];
    }

    const result = [...arr];
    const pivot = result[result.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < result.length - 1; i++) {
      if (result[i] < pivot) {
        left.push(result[i]);
      } else {
        right.push(result[i]);
      }
    }

    return [...this.sort(left), pivot, ...this.sort(right)];
  }
}

class MergeSort extends SortingStrategy {
  sort(arr) {
    if (arr.length <= 1) {
      return [...arr];
    }

    const middle = Math.floor(arr.length / 2);
    const left = this.sort(arr.slice(0, middle));
    const right = this.sort(arr.slice(middle));

    return this.merge(left, right);
  }

  merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
}

class Sorter {
  setSortingStrategy(strategy) {
    this.strategy = strategy;
  }

  sort(arr) {
    const sortedArray = this.strategy.sort(arr);
    console.log(
      `${this.strategy.constructor.name}: [${sortedArray.join(", ")}]`,
    );
  }
}

const sorter = new Sorter();

sorter.setSortingStrategy(new BubbleSort());
sorter.sort([5, 3, 8, 1, 2]);

sorter.setSortingStrategy(new QuickSort());
sorter.sort([5, 3, 8, 1, 2]);

sorter.setSortingStrategy(new MergeSort());
sorter.sort([5, 3, 8, 1, 2]);
