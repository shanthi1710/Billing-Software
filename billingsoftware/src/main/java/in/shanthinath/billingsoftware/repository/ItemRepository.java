package in.shanthinath.billingsoftware.repository;

import in.shanthinath.billingsoftware.entity.ItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface ItemRepository extends JpaRepository<ItemEntity,Long> {
    Optional<ItemEntity> findItemId(String id);
    Integer countByCategoryId(Long id);
}
