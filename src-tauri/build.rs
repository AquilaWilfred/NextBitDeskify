fn main() {
    println!("cargo:rerun-if-changed=.nextbitdeskify/nextbitdeskify.json");
    println!("cargo:rerun-if-changed=.nextbitdeskify/tauri.conf.json");
    tauri_build::build()
}
