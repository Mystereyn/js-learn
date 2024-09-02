package vectorjava;

import java.util.Vector;

class VectorPlayer {
    Vector<String> player1;

    public VectorPlayer() {
        player1 = new Vector<>();
        player1.addElement("TeukuReynaldi");
    }

    public void displayPlayers() {
        for (String player : player1) {
            System.out.println(player);
        }
    }
}

class CountOdd {
    Vector<Integer> n;

    public CountOdd() {
        n = new Vector<>();
    }

    public int countOdd() {
        int oddCount = 0;
        for (int i = 0; i < 25; i++) {
            if (i % 2 != 0) {
                n.add(i);
                oddCount++;
            }
        }
        return oddCount;
    }

    public void displayCount() {
        for (int num : n) {
            System.out.println(num);
        }
        System.out.println("Total bilangan ganjil: " + countOdd());
    }
}

// Study kasus deret Fibonacci
class Fibonacci {
    Vector<Integer> number;

    // Konstruktor tanpa return type
    public Fibonacci() {
        number = new Vector<>();
    }

    // Menghitung deret Fibonacci hingga n bilangan
    public void countFibonacci(int n) {
        int a = 0, b = 1;
        for (int i = 0; i < n; i++) {
            number.add(a);
            int temp = a + b;
            a = b;
            b = temp;
        }
    }

    public void displayFibonacci() {
        System.out.println("Deret Fibonacci:");
        for (int num : number) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}

public class index {
    public static void main(String[] args) {
        VectorPlayer vp = new VectorPlayer();
        vp.displayPlayers();
        
        CountOdd odd = new CountOdd();
        odd.displayCount();

        Fibonacci fib = new Fibonacci();
        fib.countFibonacci(20);  // Menghitung 20 bilangan Fibonacci pertama
        fib.displayFibonacci();  // Menampilkan hasilnya
    }
}
