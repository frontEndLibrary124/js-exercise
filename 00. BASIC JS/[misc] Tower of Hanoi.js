const towerOfHanoi = (n, src, dest, aux) => {
    if (n === 1) {
        console.log(`Move disk 1 from ${src} to ${dest}`);
        return;
    }

    towerOfHanoi(n - 1, src, aux, dest);
    console.log(`Move disk ${n} from ${src} to ${dest}`);
    towerOfHanoi(n - 1, aux, dest, src);
}

towerOfHanoi(3, 'A', 'C', 'B');